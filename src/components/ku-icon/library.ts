
export type IconLibraryResolverType = (name: string, localPath?: string) => string;

export interface IconLibraryInterface {
    name: string,
    resolver: IconLibraryResolverType
};

/**
 * collection of all icon set
 */
let library: IconLibraryInterface[] = [];


const registerIconLibrary = (name: string, options: { resolver: IconLibraryResolverType }) => {
    library.push({
        name,
        ...options
    });
    console.log(library);
}

const unregisterIconLibrary = (name: string): void => {
    library = library.filter(l => l.name !== name);
}

console.log(library)

export { registerIconLibrary, unregisterIconLibrary };