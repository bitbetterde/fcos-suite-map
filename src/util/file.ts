export const validateFile = (
  file: File,
  allowedSize = 5000000,
  allowedExtensions = ['jpg', 'jpeg', 'png'],
): boolean => {
  const { name: fileName, size: fileSize } = file;

  const fileExtension = fileName.split('.').pop();
  if (fileExtension && !allowedExtensions.includes(fileExtension.toLowerCase())) {
    return false;
  } else if (fileSize > allowedSize) {
    return false;
  }
  return true;
};
