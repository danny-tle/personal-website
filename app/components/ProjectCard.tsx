type Props = { title: string; desc: string; url?: string };
export default function ProjectCard({ title, desc, url }: Props) {
  return (
    <a href={url || "#"} target="_blank" rel="noreferrer" className="block p-4 border rounded hover:shadow">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm mt-1 text-gray-600">{desc}</p>
    </a>
  );
}
