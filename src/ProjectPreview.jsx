export default function ProjectPreview({ project }) {
  if (!project.preview) return null;
  return <div className="project-preview"><img src={project.preview.src} alt={project.preview.alt} loading="lazy" width="1440" height="900"/>{project.preview.caption && <span className="preview-caption">{project.preview.caption}</span>}</div>;
}
