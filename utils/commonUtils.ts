import {NO_IMAGE_PATH, S3_IMAGE_URL} from "~/constants/CommonConstants";

export default function s3Image({ src }: { src?: string }) {
    if (!src) {
        return NO_IMAGE_PATH
    }

    return /^(http)|(\/images)/i.test(src)
        ? src : `https://img-stg.x2bee.com${prependSlash(src)}`
        // : `${S3_IMAGE_URL}${prependSlash(src)}`
}
export const prependSlash = (imagePath: string) => {
    return imagePath.startsWith('/') ? imagePath : `/${imagePath}`
}
