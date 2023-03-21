import { constantCase } from "change-case";

type Options = { prefix?: string };

const delimiter = "_";

export default function buildConfig(
  envVars: string[] = [],
  options: Options = {}
) {
  const { prefix = "" } = options;
  return Object.fromEntries(
    envVars.map((name) => [
      name,
      import.meta.env[
        ["VITE", prefix, constantCase(name, { delimiter })]
          .filter(Boolean)
          .join(delimiter)
      ],
    ])
  );
}
