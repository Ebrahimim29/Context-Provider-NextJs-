import Link from "next/link"

const Sidebar = () => {

    const items = [
        {title: "Users", props: {href: "/users"}},
        {title: "Posts", props: {href: "/posts"}},
        {title: "Gallery", props: {href: "/gallery"}},
        {title: "Comments", props: {href: "/comments"}},
    ]

    return(
        <section className={"bg-olive-400 dark:bg-gray-500 w-sidebar_width fixed right-0 top-0 h-screen pt-navbar_height overflow-y-auto shadow-lg"}>
            <div className={"w-full p-4"}>
                <ul>
                    {items.map((item,i)=>(
                        <li key={"sidebarItems_"+i} className={"my-4 cursor-pointer dark:hover:bg-gray-500 hover:bg-blue-400 border-emerald-300 dark:border-red-600 text-blue-900 dark:text-white rounded-md"}>
                            <Link href={item.props.href} className="w-full h-full block px-2 py-1">
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
};

export default Sidebar;