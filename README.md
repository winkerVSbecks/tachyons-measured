📏 📐 tachyons-msrd

A set of higher order components for using tachyons.


### API

#### `withSpacing`
#### `withBackgroundColor`
#### `withColor`
#### `withSize`
#### `withBorder`
#### `withTypography`
#### `withDefaults`
#### `withBaseStyles`
#### `withMsrd`


### Why?

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

tachyons-msrd attempts to extract this and other such patterns into HOC.

Additionally, it helps break up the styles into multiple props. Which avoids `className` from becoming long and hard to read.

### Related

Inspiration for tachyons-msrd

+ [github.com/tachyons-css/tachyons](https://github.com/tachyons-css/tachyons)
+ [github.com/jxnblk/rebass](https://github.com/jxnblk/rebass)
+ [github.com/acdlite/recompose](https://github.com/acdlite/recompose)
