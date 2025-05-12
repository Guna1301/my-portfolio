
const ProjectDetails = ({title,description, subDiscription, image,tags,href,closeModel}) => {


  return (
    <div className="fixed inset-0 z-50 flex items-center
    justify-center w-full h-full overflow-hidden backdrop-blur-sm">
        <div className="relative max-w-2xl border shadow-sm
        rounded-2xl bg-gradient-to-l from-midnight to-navy
        border-white/10">
            <button className="absolute p-2 rounded-sm top-5 right-5
            bg-midnight hover:bg-gray-500"
            onClick={closeModel}
            >
                <img src="assets/close.svg" alt="close" className="h-5 w-5"/>
            </button>
            <img src={image} alt={title} className="w-full rounded-t-2xl"/>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
                <p className="mb-3 font-normal text-neutral-400">{description}</p>
                {subDiscription.map((sub)=>(
                    <p key={sub.id} className="mb-3 font-normal text-neutral-400">
                        {sub}
                    </p>
                ))}
                <div className="flex items-center justify-between mt-4">
                    <div className="flex gap-3">
                        {
                            tags.map((tag)=>{
                                <img 
                                    key={tag.id} 
                                    src={tag.path} 
                                    alt={tag.name}
                                    className="rounded-lg size-10 hover-animation"
                                
                                />
                            })
                        }
                    </div>
                    <a className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation">
                        View Project
                        <img 
                            src="assets/arrow-up.svg" 
                            alt="arrow" 
                            className="size-4"
                            href={href}
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails