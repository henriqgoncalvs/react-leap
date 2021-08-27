# Components And Styling

## Library

Throughout the projects, we were building our collection of components that you can find in [Components](../src/components), but there are also several libraries that spectacularly implement components that we use in everyday life.

### Chakra UI

- [Documentation](https://chakra-ui.com/)

We love the Chakra UI because of its vast amount of components and how well implemented they are.

This library allowed us to break out of the `Component.tsx` and `Component.styles.tsx` architecture to just 1 component file. This made implementation easier and made us deliver components faster and with higher quality.

#### HyperTheme Editor

If you need a realtime editor for Chakra Theme, you can enable the [HyperTheme Editor](https://www.hyperthe.me).

#### Prebuilt Components and Templates

- [Choc UI](https://choc-ui.tech)
- [Chakra Templates](https://chakra-templates.dev)

#### [Awesome Chakra UI](https://github.com/chakra-ui/awesome-chakra-ui)

## Global Styles

Chakra allows us to do a global theme configuration extremely easily. You can find this setting [here](../src/styles).

We use a separation based on Chakra documentation and [Design System](https://uxdesign.cc/everything-you-need-to-know-about-design-systems-54b109851969).

## Storybook

We use [Storybook](https://storybook.js.org/) for documenting and testing components in isolation. You can check the storybook by running

```
yarn storybook
```

or

```
npm run storybook
```

[Storybook Story Example Code](../src/components/Form/Form.stories.tsx)
