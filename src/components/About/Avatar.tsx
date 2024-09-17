import { Link } from "react-router-dom"

type Props = {
  src?: string,
  alt?: string,
  isCounter?: boolean,
  total?: string,
  href?: string
}

const Avatar: React.FC<Props> = ({src, alt, isCounter = false, total = "", href = ""}) => {

	if (isCounter) return (
		<Link
			to={href}
			target="_blank"
			className={
				`
          h-10 w-10
          rounded-full
          ring-1 ring-slate-50
          flex justify-center items-center
        bg-slate-800
        hover:ring-secondary-500 transition-all
        `
			}
		>
			+{total}
		</Link>
	)

	return (
		<Link to={href} target="_blank">
			<img
				src={src}
				alt={alt}
				className={
					`
            inline-block
            h-10 w-10
            rounded-full
            ring-1 ring-slate-50
          hover:ring-secondary-500 hover:ring-2 transition
          `
				}
			/>
		</Link>
	)
}
export default Avatar