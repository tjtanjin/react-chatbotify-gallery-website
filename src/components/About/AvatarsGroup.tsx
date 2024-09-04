import { Link } from "react-router-dom"
import Avatar from "./Avatar"
import useFetchContributorsAvatars from "../../hooks/useFetchContributorsAvatar";

const TOTAL_AVATARS = 8

type Props = {
  repoUrl: string,
  repoName: string,
  repoTitle: string
}

const AvatarsGroup: React.FC<Props> = ({ repoUrl, repoName, repoTitle }) => {
	const { contributors, total, loading, error } = useFetchContributorsAvatars(repoName);

	// TODO: Add appropriate error message component, and a loading spinner
	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="flex flex-col items-center lg:items-start gap-2">
			<Link
				to={repoUrl}
				target="_blank"
				className="font-medium text-lg text-slate-500 underline"
			>
				{repoTitle}
			</Link>
			<div className="flex -space-x-4 overflow-hidden p-1">
				{
					contributors.slice(0,TOTAL_AVATARS).map((contributor) =>
						<Avatar
							key={contributor.login}
							src={contributor.avatar_url}
							alt={contributor.login}
							href={contributor.html_url}
						/>
					)
				}

				{
					!(total < TOTAL_AVATARS) && <Avatar isCounter total={`${total}`} href={repoUrl}/>
				}
			</div>
		</div>
	)
}
export default AvatarsGroup