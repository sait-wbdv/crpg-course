import fs from "fs";

const employees = fs
  .readFileSync("data/Employees.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row) => {
    return row.split(",");
  });
export default defineEventHandler((event) => {
  return employees;
});
