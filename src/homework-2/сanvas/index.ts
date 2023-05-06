const canvasDefault = document.querySelector('#canvas') as HTMLCanvasElement
const canvasInverted = document.querySelector('#inverted') as HTMLCanvasElement
const canvasGrayscale = document.querySelector('#grayscale') as HTMLCanvasElement

const imageUrl = 'https://cdnn21.img.ria.ru/images/07e4/0c/0a/1588644193_0:321:3071:2048_1920x0_80_0_0_fee132516d8e1dc34b87ff087c071453.jpg'

const setCanvasImageByUrl = (canvas: HTMLCanvasElement, imageUrl: string): Promise<CanvasRenderingContext2D>  => (
  new Promise(resolve => {
    const image = new Image()
    image.crossOrigin = 'anonymous'

    image.onload = () => {
      const context = canvas.getContext('2d') as CanvasRenderingContext2D
      
      canvas.width = image.width
      canvas.height = image.height
      
      context.drawImage(image, 0, 0)
      
      return resolve(context)
    }
    
    image.src = imageUrl
  })
)

const setCanvasInvertedImageByUrl = async (canvas: HTMLCanvasElement, imageUrl: string): Promise<ImageData> => {
  const contextInverted = await setCanvasImageByUrl(canvas, imageUrl)
  const imageData = contextInverted.getImageData(0, 0, canvas.width, canvas.height)
  
  for (let i = 0; i < imageData.data.length; i += 4) {
    imageData.data[i] = 255 - imageData.data[i] 
    imageData.data[i + 1] = 255 - imageData.data[i + 1] 
    imageData.data[i + 2] = 255 - imageData.data[i + 2] 
  }
  
  contextInverted.putImageData(imageData, 0, 0)

  return imageData
}

const setCanvasGrayscaleImageByUrl = async (canvas: HTMLCanvasElement, imageUrl: string): Promise<ImageData> => {
  const contextGrayscale = await setCanvasImageByUrl(canvas, imageUrl)
  const imageData = contextGrayscale.getImageData(0, 0, canvas.width, canvas.height)
  
  for (let i = 0; i < imageData.data.length; i += 4) {
    const average = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3
    
    imageData.data[i] = average 
    imageData.data[i + 1] = average 
    imageData.data[i + 2] = average
  }
  
  contextGrayscale.putImageData(imageData, 0, 0)

  return imageData
}

setCanvasImageByUrl(canvasDefault, imageUrl)

setCanvasInvertedImageByUrl(canvasInverted, imageUrl)

setCanvasGrayscaleImageByUrl(canvasGrayscale, imageUrl)