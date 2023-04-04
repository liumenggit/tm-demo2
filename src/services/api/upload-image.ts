import {request} from "@/utils/http";
import {ApiResultOf} from "@/services/model/api-result";

export function uploadImage(imagePath: string) {
    return request.post<ApiResultOf<{ url: string }>>('image/upload', {url: imagePath})
}