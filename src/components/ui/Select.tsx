"use client"

import { useState } from "react"

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  options: SelectOption[]
}

const Select = ({ options }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState("")

  return (
    <div>
      <select
        value={selectedOption}
        onChange={(event) => setSelectedOption(event.target.value)}
        className="w-full appearance-none cursor-pointer rounded-md border border-zinc-700 bg-zinc-900 px-3 py-1 transition duration-100 hover:border-zinc-500 focus:border-zinc-500 focus:outline-none"
      >
        <option value="Show all">Show all</option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="hover:bg-zinc-800"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
