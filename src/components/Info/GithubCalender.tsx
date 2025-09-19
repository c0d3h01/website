"use client";

import { useMemo } from "react";
import GitHubCalendar from "react-github-calendar";
import Description from "../Description";
import { H2Heading } from "../H2Heading";

function GithubCalender() {
  const themes = useMemo(() => ({
    orange: ["#161B22", "#7B2D00", "#D44D00", "#FFA500", "#FFD89B"],
    blue: ["#161B22", "#0A2740", "#156B8A", "#58B2DC", "#A6E1FA"],
    green: ["#161B22", "#005249", "#2D7F67", "#6EC6A6", "#B8F2C2"],
    purple: ["#383939", "#4C5264", "#626E95", "#798CC7", "#8FA8FA"],
    red: ["#161B22", "#7A0B02", "#C21F1A", "#FF5733", "#FFA07A"],
    yellow: ["#161B22", "#665C00", "#C4A000", "#FFD700", "#FFF5B1"],
    pink: ["#161B22", "#6A1B4D", "#C2185B", "#F06292", "#FFC1E3"],
    cyan: ["#161B22", "#005F73", "#0A9396", "#94D2BD", "#E9F5DB"],
    teal: ["#161B22", "#004D40", "#00897B", "#4DB6AC", "#B2DFDB"],
    indigo: ["#161B22", "#2C387E", "#3F51B5", "#7986CB", "#C5CAE9"],
    brown: ["#161B22", "#4E342E", "#795548", "#A1887F", "#D7CCC8"],
  }), []);

  const memoizedCalendar = useMemo(() => (
    <GitHubCalendar
      colorScheme="dark"
      fontSize={12}
      blockSize={10}
      theme={{
        dark: themes.indigo,
      }}
      username="c0d3h01"
    />
  ), [themes.indigo]);

  return (
    <div className="space-y-4">
      <div>
        <H2Heading>proof of Work</H2Heading>
        <Description>
          All the work I have done so far in public &amp;&amp; people's
          appreciation
        </Description>
      </div>
      {memoizedCalendar}
    </div>
  );
}

export default GithubCalender;
