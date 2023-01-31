This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

## Git branches

### Dev

Create a copy of the `merge` branch

(create branch by task name)

When the job is done - create a pull request from `your branch` to the `merge` branch.

delete your branch after pull request

---

## Getting Started

Run the development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run the storybook:

```bash
yarn storybook
```

Open [http://localhost:6006/](http://localhost:6006/) with your browser to see the result.

### Setup Prettier VSCode

VS Code -> `View` ->` Command Palette` then enter: `Format Document With`
next `Configure Default Formatter`... then selected `Prettier - Code formatter`

### Snippets for VSCode

#### Use to create the TypeScript React Function Page Page "`rcp`"

```json
	"TypeScript React Function page": {
		"prefix": "rcp",
		"body": [
			"import React from 'react';",
			"import styles from './styles.module.scss';",
			"",
			"interface IndexProps {",
			"",
			"}",
			"",
			"const Index = ({}: IndexProps) => {",
			"\t$1",
			"",
			"\treturn (<>$0</>);",
			"}",
			"export default Index;",
			""
		],
		"description": "TypeScript React Function Page Page"
	},
```

#### Use to create the TypeScript React Function Component "`rc`"

```json
		"TypeScript React Function Component": {
		"prefix": "rc",
		"body": [
			"import React from 'react';",
			"import styles from './styles.module.scss';",
			"",
			"interface ${TM_FILENAME_BASE}Props {",
			"",
			"}",
			"",
			"export const ${TM_FILENAME_BASE} = ({}: ${TM_FILENAME_BASE}Props) => {",
			"\t$1",
			"",
			"\treturn (<>$0</>);",
			"}",
			""
		],
		"description": "TypeScript React Function Component"
	},
```

#### Use to create the TypeScript React stories Component "`rcs`"

```json
		"TypeScript React stories Component": {
		"prefix": "rcs",
		"body": [
			"import React from 'react';",
			"import { ComponentStory, ComponentMeta } from '@storybook/react';",
			"import { ${TM_FILENAME_BASE/([^.]+).*/${1:/pascalcase}/} } from './${TM_FILENAME_BASE/([^.]+).*/${1:/pascalcase}/}';",
			"",
			"export default {",
			"\ttitle: 'Components/${TM_FILENAME_BASE/([^.]+).*/${1:/pascalcase}/}',",
			"\tcomponent: ${TM_FILENAME_BASE/([^.]+).*/${1:/pascalcase}/}",
			"} as ComponentMeta<typeof ${TM_FILENAME_BASE/([^.]+).*/${1:/pascalcase}/}>;",
			"",
			"const Template: ComponentStory<typeof ${TM_FILENAME_BASE/([^.]+).*/${1:/pascalcase}/}> = (args) => (",
			"\t<${TM_FILENAME_BASE/([^.]+).*/${1:/pascalcase}/} {...args} />",
			");",
			"",
			"export const Props = Template.bind({});",
			"Props.args = {",
			"\t$1: $2",
			"};",
			""
		],
		"description": "TypeScript React stories Component"
	},
```

#### Use to create the Interfaces from the file "`int`"

```json
	"Create Interfaces from file": {
		"prefix": "int",
		"body": [
			"export interface ${TM_FILENAME_BASE}Interface {",
			"\t$1",
			"}",
			""
		],
		"description": "Create Interfaces from file"
	}

```
