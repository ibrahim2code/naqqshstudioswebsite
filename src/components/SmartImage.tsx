import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  children?: ReactNode;
  priority?: boolean;
  ratio?: string;
};

function ImageFrame({
  src,
  alt,
  className,
  imgClassName,
  children,
  priority,
  ratio,
}: SmartImageProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [failed, setFailed] = useState(false);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden bg-charcoalLight ${failed ? 'border border-line' : ''} ${className ?? ''}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
          className={`fade-img ${visible ? 'is-visible' : ''} h-full w-full object-cover transition-transform duration-[1.8s] ease-editorial group-hover:scale-[1.025] ${imgClassName ?? ''}`}
        />
      )}
      {children}
    </div>
  );
}

export function SmartImage(props: SmartImageProps) {
  return <ImageFrame {...props} />;
}

export function SmartImageLink({
  to,
  src,
  alt,
  className,
  imgClassName,
  children,
  ratio,
}: {
  to: string;
} & Omit<SmartImageProps, 'priority'>) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [failed, setFailed] = useState(false);

  return (
    <Link
      to={to}
      className={`group relative block overflow-hidden bg-charcoalLight ${failed ? 'border border-line' : ''} ${className ?? ''}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <div ref={ref} className="absolute inset-0">
        {!failed && (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className={`fade-img ${visible ? 'is-visible' : ''} h-full w-full object-cover transition-transform duration-[1.8s] ease-editorial group-hover:scale-[1.025] ${imgClassName ?? ''}`}
          />
        )}
      </div>
      {children}
    </Link>
  );
}
