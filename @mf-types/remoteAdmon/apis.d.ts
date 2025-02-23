
    export type RemoteKeys = 'remoteAdmon/Admon';
    type PackageType<T> = T extends 'remoteAdmon/Admon' ? typeof import('remoteAdmon/Admon') :any;