# Nativescript Angular

**This documents will include three parts :**
 
1. Installation & Run
2. Application Structure
3. Blueprint for development

Let's getting start with *"Installation and Run"*

## Installation and Run

1. Prerequisites:

- [Install dependencies tools](https://docs.nativescript.org/angular/start/quick-setup)

2. Run

```
tns run android # android
tns run ios # ios
```

### Build

```
npm run android-aot # android
npm run ios-aot # ios
```

## Application Structure

> The main idea is seperate things enough to be testable and reusable.

1. Constant

- All constant variables

2. Guard

- Intercept users

3. Interceptor

- Add token for each request when logined to get data from api

4. Route

- Route for app
- Route for api

5. Service

6. Shared Module

- Can be consider as a part of User Interface Layer
- Declared the reused components in app

> pipes: translate pipe
> components: header, footer, ...

7. Stylesheets

> **src/scss**

- Declared all your global stylesheet. Common global components : buttons, forms, modals, ...

> Global stylesheets

- [ ] Fonts: font-family
- [ ] General: body, body text, headings
- [ ] Icons
- [ ] Headers
- [ ] Footers
- [ ] Buttons
- [ ] Forms: input(text, password, auto complete), textarea, checkbox, radiolist, form-errors, ....
- [ ] Modals

8. I18n

> How to use translate in app?

- In tempmlate : **t** Pipe

```md
# Without param
<Label [text]="'APP_NAME' | t"></Label>

# With param
<Label [text]="'TRANSLATE_SERVICE_EXAMPLE' | t:example"></Label>
```

- In component:

```js
t('APP_NAME')
t('TRANSLATE_SERVICE_EXAMPLE', { color: 'red' })
```

## Blueprint for development

1. Always group your module by features
2. Follow the naming rules
3. Seperate containers and components
4. If your module services can be used in other module, inject it in core module
5. Never import your feature module in other feature module
6. Double check before commit anything

## Headfirst Nativescript

1. Routing

- https://docs.nativescript.org/angular/ng-framework-modules/routing

2. Layout

```javascript
<StackLayout> stacks components on top of (or next to) each other;
<WrapLayout> uses available space to wrap components on new rows/columns;
<AbsoluteLayout> places components with absolute top/left coordinates;
<GridLayout> acts like an HTML table, with rows and columns;
<DockLayout> positions components in docked containers (top/bottom/left/right);
<FlexboxLayout> lets you leverage CSS flexbox.
```
- https://docs.nativescript.org/angular/ui/layouts/layouts

> **Avoid using ListView or ScrollView with no explicit height set inside StackLayout. Doing so might results in poor user interface performance and a poor user experience**

3. Styles & Class

```html
<some-element [ngClass]="'first second'">...</some-element>

<some-element [ngClass]="['first', 'second']">...</some-element>

<some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>

<some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>

<some-element [ngClass]="{'class1 class2 class3': true}">...</some-element>
```

## ADB

- [Connect your android device with Computer](https://samsung.com/uk/support/mobile-devices/how-do-i-turn-on-the-developer-options-menu-on-my-samsung-galaxy-device)

```bash
adb kill-server
adb start-server
```

## Support

- Android: > 9
- IOS: >= 13.x

## Common document

> 1. Nativescript

- https://docs.nativescript.org/angular/start/introduction.html

> .. to be added later
