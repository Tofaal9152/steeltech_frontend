import Image, { type ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

type BlurImageProps = Omit<ImageProps, 'alt'> & {
  alt?: string
}

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: BlurImageProps) => {
  const blurDataURL = typeof src === 'string' ? src : undefined

  return (
    <Image
      className={cn(
        'h-full w-full transition duration-300',

        className,
      )}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      blurDataURL={blurDataURL}
      placeholder={blurDataURL ? 'blur' : undefined}
      alt={alt ? alt : 'Background of a beautiful view'}
      {...rest}
    />
  )
}
