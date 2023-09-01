# Plugin main file

Your plugin main file must export an object. This object must contain a few keys for your plugin to be usable. Here's a list
of all the keys you can use in your plugin.

## ``name`` 

Your plugin name.

## ``description``

A few words explaining what your plugin does.

## ``screenshot``

Not required but recommended. A screenshot of your plugin in action.

## ``replacements``

You can use this for replacing small portions of code quickly. It must be an array of the following object:
```ts
{
  file: string;
  find: RegExp;
  replace: string;
}
```

## ``inject``

A function ``(DeezerTweaker) => void`` of the code to run when your plugin starts.

## ``css``

CSS code to globally inject when your plugin is loaded. 
