[![CircleCI](https://circleci.com/gh/winkerVSbecks/tachyons-measured/tree/master.svg?style=svg)](https://circleci.com/gh/winkerVSbecks/tachyons-measured/tree/master)

# 📏 📐 tachyons-measured

A set of higher order components (HOC) for creating stateless functional UI components using tachyons.

**Usage Demo:** [🎏 App](https://pushy-spirit.glitch.me) & [🎏 Code](https://glitch.com/edit/#!/pushy-spirit)

---

- [API](#api)
  - [Media Query Support](#media-query-support)
  - [Higher Order Components](#higher-order-components)
  - [Compose](#compose)
  - [Performance](#performance)
- [Example](#example)
- [Why?](#why)
- [Inspired by and Related to](#inspired-by-and-related-to)


## API

### Media Query (MQ) Support
The following properties support the media query syntax:
- `r`, `rounded`, `bw`
- `f`, `lh`
- `h`, `w`
- `pa`, `pl`, `pr`, `pb`, `pt`, `pv`, `ph`
- `ma`, `ml`, `mr`, `mb`, `mt`, `mv`, `mh`
- `na`, `nl`, `nr`, `nb`, `nt`

This means that you can either provide regular values – such as a scale step number and literal values – or an object which specifies values by breakpoints.

For example: `<Text f={1} />` or `<Text f={{ all: 3, ns: 2, m: 1, l: 'headline' }} />`

`all`: All breakpoints (unless otherwise specified with another breakpoint)
`ns`: Not small
`m`: Medium
`l`: Large

### Higher Order Components

- [`withBaseStyles`](#withbasestyles)
- [`withSpacing`](#withspacing)
- [`withBackgroundColor`](#withbackgroundcolor)
- [`withColor`](#withcolor)
- [`withSize`](#withsize)
- [`withTypography`](#withtypography)
- [`withBorder`](#withborder)
- [`withDefaults`](#withdefaults)
- [`withMeasured`](#withMeasured)

#### `withBaseStyles`
```js
withBaseStyles(
  baseStyles: Array<string> or string
): HigherOrderComponent
```
HOC for creating a styled component with a set of classNames applied to it.

```js
const ButtonLink = compose('f6 link dim br1 ph3 pv2 mb2 dib white bg-black')('a');

<ButtonLink>Link Text</ButtonLink>
```


#### `withSpacing`
```js
withSpacing(): HigherOrderComponent
```
Exposes the [spacing scale](http://tachyons.io/docs/layout/spacing) as props.

```js
const Div = withSpacing('div');

<Div
  mh={3} mv={{ l: 4, m: 3, ns: 2, all: 1 }}
  nl={{ l: 3, m: 2, ns: 4, all: 1 }}
  pr={4} pl={4} pv={2}
  className="myClass my-other-class"
/>
```

| Prop | Type | MQ Support |
|---|---|---|
| `ma` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `mt` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `ml` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `mr` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `mb` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `mv` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `mh` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `na` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `nt` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `nl` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `nr` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `nb` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `pa` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `pt` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `pl` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `pr` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `pb` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `pv` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |
| `ph` | `oneOf([0, 1, 2, 3, 4, 5, 6, 7])` | 🚫 |


#### `withBackgroundColor`
```js
withBackgroundColor(
  colors: Array<string>
): HigherOrderComponent
```
Allows you to set the background color using the `bg` prop. You will have to provide it a list of colour names that you are using in your project.

```js
const clrs = ['red', 'green', 'blue', 'washed-yellow'];
const Div = withBackgroundColor(clrs)('div');

<Div
  bg="washed-yellow"
  className="myClass my-other-class"
/>
```

| Prop | Type | MQ Support |
|---|---|---|
| `bg` | `oneOf([...<list of colors provided>])` | 🚫 |


#### `withColor`
```js
withColor(
  colors: Array<string>
): HigherOrderComponent
```
Allows you to set the font color using the `color` prop. You will have to provide it a list of colour names that you are using in your project.

```js
const clrs = ['medium-gray', 'red', 'green', 'blue'];
const Text = withColor(clrs)('p');

<Text
  color="medium-gray"
  className="myClass my-other-class"
/>
```

| Prop | Type | MQ Support |
|---|---|---|
| `color` | `oneOf([...<list of colors provided>])` | 🚫 |


#### `withSize`
```js
withSize(): HigherOrderComponent
```
Exposes [widths](http://tachyons.io/docs/layout/widths/) & [heights](http://tachyons.io/docs/layout/heights/) as props.

```js
const Div = withSize('div');;

<Div
  w={{ l: 5, m: 4, ns: 'third', all: 3 }}
  h={5}
  className="myClass my-other-class"
/>
```

| Prop | Type | MQ Support |
|---|---|---|
| `w` | `oneOf([1, 2, 3, 4, 5, 10, 20, 25, 30, 33, 34, 40, 50, 60, 70, 75, 80, 90, 100, 'third', 'two-thirds', 'auto'])` | ✅ |
| `h` | `oneOf([1, 2, 3, 4, 5, 25, 50, 75, 100, 'auto'])` | ✅ |


#### `withTypography`
```js
withTypography(): HigherOrderComponent
```
Allows you to set the [font size](http://tachyons.io/docs/typography/scale) and [line-height](http://tachyons.io/docs/typography/line-height) using the `f` and `lh` props respectively.

```js
const Text = withTypography('p');;

<Text
  f={{ l: 4, m: 3, ns: 2, all: 1 }}
  lh="copy"
  className="myClass my-other-class"
/>
```

| Prop | Type | MQ Support |
|---|---|---|
| `f` | `oneOf([1, 2, 3, 4, 5, 6, 7, 'headline', 'subheadline'])` | ✅ |
| `lh` | `oneOf(['solid', 'title', 'copy'])` | ✅ |


#### `withBorder`
```js
withBorder(
  colors: Array<string>
): HigherOrderComponent
```
Allows you to set border styles using props. You will have to provide it a list of colour names that you are using in your project.

```js
const clrs = ['medium-gray', 'red', 'green', 'blue'];
const Div = withBorder(clrs)('div');

<Div
  ba="gray" bw={2}
  radius={{ l: 1, m: 2, ns: 100, all: 4 }}
  rounded={{ l: 'bottom', m: 'top', ns: 'right', all: 'left' }}
  className="myClass my-other-class"
/>
```

| Prop | Type | MQ Support |
|---|---|---|
| `ba` | boolean or `oneOf([...<list of colors provided>])` | 🚫 |
| `bl` | boolean or `oneOf([...<list of colors provided>])` | 🚫 |
| `br` | boolean or `oneOf([...<list of colors provided>])` | 🚫 |
| `bt` | boolean or `oneOf([...<list of colors provided>])` | 🚫 |
| `bb` | boolean or `oneOf([...<list of colors provided>])` | 🚫 |
| `bn` | boolean | 🚫 |
| `bw`  | `oneOf([[0, 1, 2, 3, 4, 5]])` | ✅ |
| `radius` | `oneOf([0, 1, 2, 3, 4, 100, 'pill'])` | ✅ |
| `rounded` | `oneOf(['bottom', 'top', 'right', 'left'])` | ✅ |


#### `withDefaults`
```js
withDefaults(
  defaultsForProps: Object
): HigherOrderComponent
```
Allows you to provide default values for any props.

```js
const Title = compose(
  withTypography,
  withDefaults({ f: 1, lh: 'title' }),
)('h1');

// Will receive f as 1 and lh as 'title'
<Title className="myClass my-other-class" />
// Will receive f as 2 and lh as 'title'
<Title f={2} className="myClass my-other-class" />
```


#### `withMeasured`
```js
withMeasured(
  colors: Array<string>
): HigherOrderComponent
```
A composition of `withSpacing`, `withBackgroundColor(colors)`, `withColor(colors)`, `withSize`, `withBorder(colors)` and `withTypography`.

```js
const clrs = ['white', 'red', 'green', 'blue'];
export const Block = withMeasured(clrs)('div');

<Block
  f={{ l: 4, m: 3, ns: 2, all: 1 }}
  lh="copy"
  mh={3} mv={2} mt={4} nl={3}
  pa={{ l: 4, m: 4, ns: 3, all: 2 }}
  bg="blue"
  color="white"
  w={5}
  h={{ l: 50, m: 4, ns: 3, all: 2 }}
  bb="gray" bw={{ l: 1, m: 2, ns: 3, all: 4 }}
  radius="pill"
  rounded="top"
/>
```

### Compose
tachyons-measured provides the [ramda](http://ramdajs.com/docs/#compose) `compose` function. However, should be able to use any `compose` function. Such as the one provided by [underscore](http://underscorejs.org/#compose) or [recompose](https://github.com/acdlite/recompose/blob/master/docs/API.md#compose), etc.

```js
import { compose } from 'tachyons-measured';
```


### Performance
All the HOC provided by this library are stateless and mostly just responsible for mapping or generating props. Therefore, they have been setup to be eagerly evaluated. This is based on the [createEagerElement](https://github.com/acdlite/recompose/blob/master/src/packages/recompose/utils/createEagerElementUtil.js) pattern from [recompose](https://github.com/acdlite/recompose).

Without eager evaluation the component tree would look something like this:

```js
<withSpacing>
  <withBackgroundColor>
    <withColor>
      <withSize>
        <withBorder>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <div>
        <withBorder>
      <withSize>
    <withColor>
  <withBackgroundColor>
</withSpacing>
```

With eager evaluation all the HOC are collapsed into one component instance. This helps achieve better performance since a fewer component instances are created. Also, it should help with debugging since the component tree is much flatter.

```js
<withSpacing(withBackgroundColor(withColor(withSize(withBorder(div)))))>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</withSpacing(withBackgroundColor(withColor(withSize(withBorder(div)))))>
```

For more info see this [talk by Andrew Clark](https://youtu.be/zD_judE-bXk?t=19m10s)



## Example

We are going to replicate this [Product Card](http://tachyons.io/components/cards/product-card/index.html). We start by creating some base components by enhancing HTML elements using tachyons-measured HOCs.

```js
export const Block = withMeasured(clrs)('div');
export const Article = withMeasured(clrs)('article');
export const Heading = withMeasured(clrs)('h1');

export const Text = compose(
  withDefaults({ f: 5, lh: 'copy' }),
  withMeasured(clrs),
)('p');

export const Media = compose(
  withBorder(clrs),
  withSize,
  withSpacing,
  withBaseStyles('db'),
)('img');
```

The `<ProductCard>` component is simply the `<Article>` component with some default styles applied to it. Therefore, we can create the `<ProductCard>` by wrapping `<Article>` with the `withDefaults` HOC.

```js
export const ProductCard = withDefaults({
  ba: 'black-10',
  radius: 2,
  bg: 'white',
  color: 'dark-gray',
})(Article);
```

Finally, we combine them all together to create the `<CatProductCard>`.

```js
export const CatProductCard = props => (
  <ProductCard {...props}>

    <Media
      src="http://placekitten.com/g/600/300"
      w={100}
      radius={2} rounded="top"
      alt="kitten looking menacing."
    />

    <Block pa={2} ph={{ ns: 3 }} pb={{ ns: 3 }}>

      <Block w={100} mt={1} className="flex items-center">
        <Heading
          f={{ all: 5, ns: 4 }} mv={0}
          className="flex-auto"
        >
          Cat
        </Heading>
        <Heading f={5} mv={0}>$1,000</Heading>
      </Block>

      <Text
        mt={2}
        f={6} lh="copy" color="mid-gray"
        className="measure"
      >
        If it fits, i sits burrow under covers. Destroy couch leave hair
        everywhere, and touch water with paw then recoil in horror.
      </Text>

    </Block>
  </ProductCard>
);
```

We are passing all `props` from `<CatProductCard>` to `<ProductCard>`. This means when we are using `<CatProductCard>` we can use props to control the styles for a specific instance. For example:

```js
<CatProductCard
  w={{ all: 100, m: 5, l: 5 }}
  className="center"
/>
```

🎏 See the full code for the example here [tachyons-measured demo](https://pushy-spirit.glitch.me)
🚨 For more examples see the `examples` directory.


## Why?

1. It allows you to quickly create styled and/or stateless functional UI components which use tachyons for styling.

2. It helps break up the styles into multiple props. This avoids `className` from becoming long and hard to read.

    ```js
    <Button
      f={4} lh="solid"
      bg="near-white" color="black-60"
      br="3" rounded="top"
      mv={0} pv={2} ph={3}
    />
    ```

3. It enforces typechecking using `propTypes`. This helps catch values not supported by tachyons.

4. It makes it easier to provide defaults (see the explanation below).

When building components we often want to provide some base styling and then allow the user to override some of that styling. This can be challenging to achieve by providing all the overriding-styles through one prop. For example:

```js
const Button = ({ className, ...props}) => {
  const styles = classNames('f6', 'link', 'dim', 'br1', 'bn',
    'ph3', 'pv2', 'mb2', 'dib', 'bg-green', 'white', className);

  return (
    <a className={styles} {...props} />
  );
};
```

This component provides all the base-styles. Including the default background and text colours. There are many ways to do this however, for this particular example I'm using `classNames`.

```js
// Will render with green background and white text
<Button className="mr3">Button Text</Button>
// Will render with blue background and white text
<Button className="bg-blue mr3">Button Text</Button>
// Will render with green background and white text
<Button className="bg-red">Button Text</Button>
```

You might notice a problem with the above scenario. The first two buttons will render as expected however, the third one will not. This is because in tachyons CSS `.bg-green` is defined after `.bg-red` so it will take precedence.

```css
/* Background colors */
.bg-red { background-color: #ff4136; }
  ...
.bg-green { background-color: #19a974; }
  ...
.bg-blue { background-color: #357edd; }
```

In order to get around this we can expose `background` and `color` as props.

```js
const Button = ({
  bgColor = 'bg-green',
  color = 'white',
  className,
  ...props
}) => {
  const styles = classNames('f6', 'link', 'dim', 'br1', 'bn',
    'ph3', 'pv2', 'mb2', 'dib', bgColor, color, className);

  return (
    <a className={styles} {...props} />
  );
};
```

full example: [codepen.io/winkerVSbecks/pen/LWBLYb](http://codepen.io/winkerVSbecks/pen/LWBLYb?editors=0010)


## Inspired by and Related to

+ [tachyons-react](https://github.com/tachyons-react/tachyons-react)
+ [tachyons](https://github.com/tachyons-css/tachyons)
+ [github.com/jxnblk/rebass](https://github.com/jxnblk/rebass)
+ [github.com/acdlite/recompose](https://github.com/acdlite/recompose)


## Feedback
This is still in the early stages. Any feedback and bug reports are much appreciated. Please submit them [here](https://github.com/winkerVSbecks/tachyons-measured/issues) or reach out to me on [twitter](https://twitter.com/winkerVSbecks).
