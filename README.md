# Nezastavitelni Preview Button DatoCMS plugin

Preview button for Birell Nezastavitelni

## Configuration

[Describe/screenshot any global/instance parameters this plugin requires]

## Development

Install all the project dependencies with:

```
npm install
```

Add this plugin in development mode to one of your DatoCMS project with:

```
npm run saddToProject
```

Start the local development server with:

```
npm run sstart
```

The plugin will be served from [https://datocms-plugin-preview-button-nezastavitelni.tunnel.datahub.at/](https://datocms-plugin-preview-button.tunnel.datahub.at/). Insert this URL as the plugin [Entry point URL](https://www.datocms.com/docs/plugins/creating-a-new-plugin/).

## Publishing

Before publishing this plugin, make sure:

* you've properly described any configuration parameters in this README file;
* you've properly compiled this project's `package.json` following the [official rules](https://www.datocms.com/docs/plugins/publishing/);
* you've added a cover image (`cover.png`) and a preview GIF (`preview.gif`) into the `docs` folder.

When everything's ready, just run:

```
npm run spublish
```
