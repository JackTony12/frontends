export type Tool = {
  title: string;
  name: string;
  description: string;
  url: string;
  iconName: string;
};

export const miduVscode: Tool[] = [
  {
    title: 'Tema vs-code',
    name: 'One dark Pro',
    description: 'Tema oscuro popular y elegante para Visual Studio Code.',
    url: 'https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme',
    iconName: 'extensions'
  },
  {
    title: 'Fuente',
    name: 'Cascadia-code',
    description: 'Fuente moderna con ligaduras para mejorar la lectura del código.',
    url: 'https://github.com/microsoft/cascadia-code/releases/',
    iconName: 'extensions'
  },
  {
    title: 'Simbolos',
    name: 'Miguel Osorio Symbols',
    description: 'Paquete de íconos que facilita identificar archivos en VS Code.',
    url: 'https://github.com/microsoft/cascadia-code/releases/',
    iconName: 'extensions'
  },
  {
    title: 'Extension',
    name: 'ErrorLens',
    description: 'Paquete de íconos que facilita identificar archivos en VS Code.',
    url: 'https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens',
    iconName: 'extensions'
  },
  {
    title: 'Extension',
    name: 'Console Ninja',
    description: 'Paquete de íconos que facilita identificar archivos en VS Code.',
    url: 'https://marketplace.visualstudio.com/items?itemName=WallabyJs.console-ninja',
    iconName: 'extensions'
  },
]

export const miduWebTools: Tool[] = [
  {
    title: 'Imagenes',
    name: 'Squoosh',
    description: 'Paquete de íconos que facilita identificar archivos en VS Code.',
    url: 'https://squoosh.app/',
    iconName: 'edition'
  },
  {
    title: 'Playground',
    name: 'Codilink',
    description: 'Paquete de íconos que facilita identificar archivos en VS Code.',
    url: 'https://codi.link/',
    iconName: 'terminal'
  }
]
