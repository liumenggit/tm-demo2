import {request} from "@/utils/http";

export function imageUpload(imagePath: string): Promise<HttpResponse<{ url: string }>> {
    return request.get('image/upload')
}