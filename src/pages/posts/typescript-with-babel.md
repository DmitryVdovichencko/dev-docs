# Typescript и Babel: "Счастливы Вместе"

Перевод статьи [Matt Turnbull](https://iamturns.com/about/) [TypeScript With Babel: A Beautiful Marriage](https://iamturns.com/typescript-babel/)

Использовать TypeScript еще никогда не было так просто: благодаря TypeScript плагину для Babel (`@babel/preset-typescript`), который стал результатом длительного сотрудничества между командами TypeScript и Babel. В этой статье мы узнаем 4 причины, почему TypeScript и Babel идеальная пара, и пройдем пошаговое руководство на TypeScript за 10 минут.

## А? Что? Зачем?
I didn’t understand the need for this new preset at first.

Aren’t Babel and TypeScript two completely different things? How can Babel handle the TypeScript type checking? TypeScript can already output to ES5 just like Babel can, so what’s the point? Isn’t merging Babel and TypeScript complicating things?

After hours of research, my conclusion:
TypeScript and Babel are a beautiful marriage.

Let me show you.

1) You already use Babel (or should).
You’re in one of these three categories:

You already use Babel. If not directly, then your Webpack config feeds *.js files into Babel (this is the case for most boilerplates, including create-react-app).
You use Typescript without Babel. Consider adding Babel to your arsenal, it provides many unique features. Read on.
You don’t use Babel? It’s time to jump on board.
Write modern JavaScript without breaking anything.
Your JavaScript code needs to run in an old browser? No problem, Babel converts the code and makes everything a-okay. Use the latest and greatest features without worry.

The TypeScript compiler has a similar feature, enabled by setting target to something like ES5 or ES6. But the Babel configuration improves on this with babel-preset-env. Instead of locking in a specific set of JavaScript features (ES5, ES6, etc), you list the environments you need to support:
"targets": {
	"browsers": ["last 2 versions", "safari >= 7"],
	"node": "6.10"
}
Babel uses compat-table to check which JavaScript features to convert and polyfill for those specific target environments.
compat-tablecompat-table
Take a moment to appreciate the genius who named this project ‘compat-table’.
An interesting technique used by create-react-app: compile with the latest browsers during development (for speed), and compile with a larger range of browsers in production (for compatibility). Nice.
Babel is super configurable.
Want JSX? Flow? TypeScript? Just install a plugin and Babel can handle it. There’s a huge selection of official plugins, mostly covering upcoming JavaScript syntax. And there’s plenty of third-party plugins too: improve lodash imports, enhance console.log, or strip console.log. Find more on the awesome-babel list.
But be careful. If the plugin alters the syntax significantly, then TypeScript may be unable to parse it. For example, the highly anticipated optional chaining proposal has a Babel plugin:
Optional chainingOptional chaining
@babel/plugin-proposal-optional-chaining
But unfortunately TypeScript is unable to understand this updated syntax.

Don’t stress, there’s an alternative…

Babel Macros
You know Kent C Dodds? He’s created a game-changing Babel plugin: babel-plugin-macros.
Instead of adding plugins to your Babel config file, you install the macro as a dependency and import it within your code. The macro kicks in when Babel is compiling, and modifies the code however it likes.

Here’s an example. Using idx.macro to scratch our itch until optional chaining proposal arrives.
import idx from 'idx.macro';

const friends = idx(
	props,
	_ => _.user.friends[0].friends
);
Compiles to:

const friends =
	props.user == null ? props.user :
	props.user.friends == null ? props.user.friends :
	props.user.friends[0] == null ? props.user.friends[0] :
	props.user.friends[0].friends
Macros are pretty new, but quickly gaining traction. Especially since landing in create-react-app v2.0. CSS in JS is covered: styled-jsx, styled-components, and emotion. Webpack plugins are being ported over: raw-loader, url-loader, and filesize-loader. And many more listed on awesome-babel-macros.
Here’s the best part: unlike Babel plugins, all Babel macros are compatible with TypeScript. They can also help reduce run-time dependencies, avoid client-side computation, and catch errors earlier at build-time. Check out this post for more details.
Improved console.log
A better console.log: scope.macro
2) It’s easier to manage ONE compiler.
TypeScript requires it’s own compiler — it’s what provides the amazing type checking superpowers.

In the gloomy days (before Babel 7).
Chaining together two separate compilers (TypeScript and Babel) is no easy feat. The compilation flow becomes: TS > TS Compiler > JS > Babel > JS (again).
Webpack is often used to solve this problem. Tweak your Webpack config to feed *.ts into TypeScript, and then feed the result into Babel. But which TypeScript loader do you use? Two popular choices are ts-loader and awesome-typescript-loader. The README.md for awesome-typescript-loader mentions it might be slower for some workloads, and recommends ts-loader with HappyPack or thread-loader. The README.md for ts-loader recommends combining with fork-ts-checker-webpack-plugin, HappyPack, thread-loader, and / or cache-loader.
Eugh. No. This is where most people get overwhelmed and put TypeScript in the “too hard” basket. I don’t blame them.

One does not simply configure TypeScriptOne does not simply configure TypeScript
The bright sunny days (with Babel 7).
Wouldn’t it be nice to have one JavaScript compiler? Whether your code has ES2015 features, JSX, TypeScript, or something crazy custom — the compiler knows what to do.
I just described Babel. Cheeky.

By allowing Babel to act as the single compiler, there’s no need to manage, configure, or merge two compilers with some convoluted Webpack sorcery.

It also simplifies the entire JavaScript ecosystem. Instead of linters, test runners, build systems, and boilerplates supporting different compilers, they just need to support Babel. You then configure Babel to handle your specific needs. Say goodbye to ts-node, ts-jest, ts-karma, create-react-app-typescript, etc, and use the Babel support instead. Support for Babel is everywhere, checkout the Babel setup page:
Babel and TypeScriptBabel and TypeScript
Babel has you covered.
3) It’s faster to compile.
Warning! You might want to sit down for this bit.
How does Babel handle TypeScript code? It removes it.

Yep, it strips out all the TypeScript, turns it into “regular” JavaScript, and continues on its merry way.

This sounds ridiculous, but this approach has two strong advantages.

The first advantage: ️⚡️IT’S LIGHTNING FAST ⚡️.
Most Typescript developers experience slow compilation times during development / watch mode. You’re coding away, you save a file, and… then… here it comes… annnnd… finally, you see your change. Oops, made a typo, fix that, save it, annnnd… eugh. It’s just slow enough to be annoying and break your momentum.
It’s hard to blame the TypeScript compiler, it’s doing a lot of work. It’s scanning for type definition files (*.d.ts), including within node_modules, and ensuring your code is used correctly. This is why many fork the Typescript type checking into a separate process. However the Babel + TypeScript combo still provides faster compilation thanks to Babel’s superior caching and single-file emit architecture.
So, if Babel strips out TypeScript code, what’s the point in writing TypeScript? That brings us to the second advantage…

4) Check for type errors only when you’re ready.
You’re hacking some code together, quickly bashing out a solution to see if your idea has legs. You save the file, and TypeScript screams at you:

“No! I won’t compile this! Your code is broken in 42 different files!”
Yeah, you know it’s broken. You’ve probably broken a few unit tests too. But you’re just experimenting at this point. It’s infuriating to continuously ensure all your code is type safe all the time.
This is the second advantage of Babel stripping out TypeScript code during compilation. You write code, you save, and it compiles (very quickly) without checking for type safety. Keep experimenting with your solution until you’re ready to check the code for errors. This workflow keeps you in the zone as you’re coding.
So how do you check for type errors? Add a npm run check-types script that invokes the TypeScript compiler. I tweak my npm test command to first check types, and then continue running unit tests.
It’s not a perfect marriage.
According to the announcement post, there are four TypeScript features that do not compile in Babel due to its single-file emit architecture.
Don’t worry, it ain’t so bad. And TypeScript will warn against these issues when the isolatedModules flag is enabled.
1) Namespaces.

Solution: don’t use them! They’re outdated. Use the industry standard ES6 modules (import / export) instead. The recommended tslint rules ensure namespaces are not used.
2) Casting a type with the<newtype>x syntax.

Solution: Use x as newtype instead.
3) Const enums.

This is a shame. Need to resort to regular enums for now.

4) Legacy-style import / export syntax.

Examples: import foo = require(...) and export = foo.
In all my years of TypeScriptin’ I’ve never come across this. Who codes this way? Stop it!

Ok, I’m ready to try TypeScript with Babel!
Yeah!Yeah!
Photo by rawpixel.com
Let’s do this! It should only take about 10 minutes.

I’m assuming you have Babel 7 setup. If not, see the Babel Migration Guide.
1) Rename .js files to .ts

Assuming your files are in /src:
find src -name "*.js" -exec sh -c 'mv "$0" "${0%.js}.ts"' {} ;
2) Add TypeScript to Babel

A few dependencies:

npm install --save-dev @babel/preset-typescript @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread
In your Babel config file (.babelrc or babel.config.js):
{
	"presets": [
			"@babel/typescript"
	],
	"plugins": [
			"@babel/proposal-class-properties",
			"@babel/proposal-object-rest-spread"
	]
}
TypeScript has a couple of extra features which Babel needs to know about (via those two plugins listed above).

Babel looks for .js files by default, and sadly this is not configurable within the Babel config file.

If you use Babel CLI, add --extensions '.ts'

If you use Webpack, add 'ts' to resolve.extensions array.
3) Add ‘check-types’ command

In package.json:
"scripts": {
	"check-types": "tsc"
}
This command simply invokes the TypeScript compiler (tsc).
Where does tsc come from? We need to install TypeScript:
npm install --save-dev typescript
To configure TypeScript (and tsc), we need a tsconfig.json file in the root directory:
{
	"compilerOptions": {
		// Target latest version of ECMAScript.
		"target": "esnext",
		// Search under node_modules for non-relative imports.
		"moduleResolution": "node",
		// Process & infer types from .js files.
		"allowJs": true,
		// Don't emit; allow Babel to transform files.
		"noEmit": true,
		// Enable strictest settings like strictNullChecks & noImplicitAny.
		"strict": true,
		// Disallow features that require cross-file information for emit.
		"isolatedModules": true,
		// Import non-ES modules as default imports.
		"esModuleInterop": true
	},
	"include": [
		"src"
	]
}
Done.

Well, the setup is done. Now run npm run check-types (watch mode: npm run check-types -- --watch) and ensure TypeScript is happy with your code. Chances are you’ll find a few bugs you didn’t know existed. This is a good thing! The Migrating from Javascript guide will help here.
Microsoft’s TypeScript-Babel-Starter guide contains additional setup instructions, including installing Babel from scratch, generating type definition (d.ts) files, and using it with React.
What about linting?
Use tslint.

Update (Feb 2019): Use ESlint! The TypeScript team are focusing on ESLint integration since January. It’s easy to configure ESLint thanks to the @typesript-eslint project. For inspiration, check out my mega ESLint config which includes TypeScript, Airbnb, Prettier, and React.
Babel + TypeScript = Beautiful Marriage.
Love heartsLove hearts
Photo by Akshar Dave
Babel is the one-and-only JavaScript compiler you need. It can be configured to handle anything.

There’s no need to battle with two competing JavaScript compilers. Simplify your project configuration and take advantage of Babel’s amazing integration with linters, test runners, build systems, and boilerplates.

The Babel and TypeScript combo is lightning fast to compile, and allows you to stay in the zone as you code, and check types only when you’re ready.

Prediction: TypeScript will rise.
According to the most recent Stack Overflow Developer Survey, JavaScript is the most popular language, with TypeScript trailing at #12. This is still a great achievement for TypeScript, beating out Ruby, Swift, and Go.
Developer survey resultsDeveloper survey results
I predict TypeScript will crack the top 10 by next year.

The TypeScript team are working hard to spread the love. This Babel preset was a year long collaboration, and their new focus is on improving ESLint integration. This is a smart move — leverage the features, community, and plugins of existing tools. To develop competing compilers and linters is wasted effort.
The path to TypeScript is paved by simply tweaking the config of our favourite tools. The barrier to entry has been smashed.

With the rise in popularity of VS Code, developers are already setup with an amazing TypeScript environment. Autocomplete on steroids will bring tears of joy.
It’s also now integrated into create-react-app v2.0, exposing TypeScript to an audience of 200k downloads per month.
If you’ve been put off by TypeScript because it’s difficult to setup, it’s no longer an excuse. It’s time to give it a go.
