## Description

This is [Holu](https://github.com/holujs/holu) starter.

## Usage

Start in development mode:

```bash
npm run start:dev
```

You can check the server operation using `curl`:

```bash
curl -i localhost:3000/api/hello
```

Or simply by going to [http://localhost:3000/api/hello](http://localhost:3000/api/hello) in your browser.

By default, the application works with `info` log level. You can change it in the file `src/app/app.module.ts`.

Start in production mode:

```bash
npm run build
npm run start-prod
```

From second terminal, check work:

```bash
curl -i localhost:3000/api/hello
curl -i localhost:3000/api/throw-error
curl -i localhost:3000/api/body -d '{"one":1}' -H 'content-type: application/json'

# Use controller as singleton
curl -i localhost:3000/api/hello2
curl -i localhost:3000/api/throw-error2
curl -i localhost:3000/api/body2 -d '{"one":1}' -H 'content-type: application/json'
```

## Example

You can see more example usage in [holu repository](https://github.com/holujs/holu/tree/main/examples)

### Add `AGENTS.md` and `SKILL.md` for AI agents

The file [AGENTS.md][1] is intended for AI agents and should be placed in the root directory of the repository. This file will be taken into account by the AI agent every time you interact with the agent. To copy the latest version of `AGENTS.md`, run the following command:

```bash
npm run setup:agents
```

Additionally, you can install [AI agent skills][2] to help them better understand the specifics of Holu applications:

```bash
npx skills add https://github.com/holujs/agent-skills --skill '*' -y
```

AI agent skills are only loaded when needed, when you ask something relevant to them.

[1]: https://github.com/holujs/agent-skills/blob/main/AGENTS.md
[2]: https://github.com/holujs/agent-skills/tree/main

