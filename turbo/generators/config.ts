import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("package", {
    description: "Add a new package to the monorepo",
    prompts: [
      {
        type: "input",
        name: "scope",
        message: "Package scope (e.g. @acme):",
        default: "@mme"
      },
      {
        type: "input",
        name: "name",
        message: "Package name (without scope):",
        validate: (input: string) =>
          input.trim().length > 0 || "Package name is required"
      },
      {
        type: "list",
        name: "type",
        message: "Package type:",
        choices: [
          {
            name: "Library — published to npm, consumed by other packages",
            value: "library"
          },
          {
            name: "App — deployed service or CLI, not published to npm",
            value: "app"
          }
        ]
      }
    ],
    actions: [
      {
        type: "addMany",
        destination: "packages/{{name}}",
        templateFiles: "templates/{{type}}/**",
        base: "templates/{{type}}",
        globOptions: { dot: true }
      }
    ]
  });
}
