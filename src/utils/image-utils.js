export function getImageURL(imagepath){
    return new URL(imagepath,import.meta.url).href;
}