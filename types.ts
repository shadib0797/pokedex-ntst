export interface Pokemon{
    name:string,
    url?:string,
    image:string,
}

export interface Result{
    name:string,
    url:string,
}

export interface GetResults{
    results:Result[]
}