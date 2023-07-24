# Project Setup and Page Creation Guide

## Local Development

1. Make sure you have "pnpm" installed. If not, you can install it by following the instructions [here](link-to-installation-guide).

2. Run the following command to install the dependencies: pnpm i

3. Start the development server by running the following command: pnpm dev

4. Once the development server is running, you can visit `localhost:3000` in your web browser to preview your website or application.

# How to create your own page

1. Create a new .mdx file in the `pages` folder.

2. On the top of the file, write the title of the page using the `#` symbol.

3. By default, the name of the sidebar will be the same as your file name. If you want to modify it, you can change the information in the `_meta.json` file.

4. Fill your file with the necessary information for your page.

## Creating a page with subpages

1. Create a new `.mdx` file in the `pages` folder. For example, name it `advanced.mdx`.

2. On the top of the file, write the title of the page using the `#` symbol.

3. By default, the name of the sidebar will be the same as your file name. If you want to modify it, you can change the information in the `_meta.json` file.

4. Fill your file with the necessary information for your page.

5. To create subpages, create a folder in the `/pages/` directory, for example, name it `advanced`.

6. Inside the `advanced` folder, create an `index.mdx` file. This file will serve as the index page for the subpages inside the `advanced` folder.

7. You can create additional files within the `advanced` folder to serve as subpages.

8. Alternatively, you can create a folder with an `_meta.json` file inside it. This allows you to create subpages with custom names. The folder name will be used as the name for the sidebar, and inside the folder, you can have all your files as subpages.

For more detailed information on page configuration, refer to: [https://nextra.site/docs/docs-theme/page-configuration](https://nextra.site/docs/docs-theme/page-configuration)

## License

This project is licensed under the MIT License.

## Docs

For more detailed documentation, visit: [https://nextra.site](https://nextra.site)
