import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export function usePhotoGallery() {
    const addNewToGallery = async () => {
        // take photo
        const capturedPhoto = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        });
    };

    return {
        addNewToGallery,
    };
}