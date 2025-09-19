import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

type ContributionDay = {
  contributionCount: number;
  date: string;
};

type Week = {
  contributionDays: ContributionDay[];
};

type ContributionCalendar = {
  totalContributions: number;
  weeks: Week[];
};

type ContributionsCollection = {
  contributionCalendar: ContributionCalendar;
};

type User = {
  contributionsCollection: ContributionsCollection;
};

type GitHubResponse = {
  data: {
    user: User;
  };
};

const GITHUB_USERNAME = "hanuchaudhary";
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const QUERY = `{
  user(login: "${GITHUB_USERNAME}") {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`;

export const useGithubHook = () => {
  const [contributionsGraph, setContributionsGraph] = useState<Week[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const isFetched = useRef<boolean>(false);

  const getGithubData = useCallback(async (): Promise<void> => {
    if (isFetched.current) return;
    setLoading(true);
    try {
      const response = await axios.post<GitHubResponse>(
        "https://api.github.com/graphql",
        { query: QUERY },
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      setContributionsGraph(
        response.data.data.user.contributionsCollection.contributionCalendar
          .weeks
      );
      isFetched.current = true; // Mark as fetched
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getGithubData();
  }, [getGithubData]);

  return { loading, contributionsGraph };
};
