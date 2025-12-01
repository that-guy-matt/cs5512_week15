import { useState } from 'react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export function usePhotoGallery() {
    const [photos, setPhotos ] = useState<UserPhoto[]>([]);

    const addNewToGallery = async () => {
        // take photo
        const capturedPhoto = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });
        
        const fileName = Date.now() + '.jpg';

        const savedImageFile = [
         {
            filepath: fileName,
            webviewPath: capturedPhoto.webPath,
         },
        ...photos,
        ];

        setPhotos(savedImageFile);
    };


    return {
        addNewToGallery,
        photos,
    };
}

export interface UserPhoto {
    filepath: string;
    webviewPath?: string;
}