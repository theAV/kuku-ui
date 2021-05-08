import { IconLibraryInterface } from './library';

const systemIcon: IconLibraryInterface = {
    name: 'system',
    resolver: (name, localpath) => `${localpath}/${name}.svg`
}
export default systemIcon