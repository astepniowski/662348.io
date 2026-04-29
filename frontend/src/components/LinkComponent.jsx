function LinkComponent({className, href, children}) {
    return(
        <a className={className} href={href} target="_blank">{children}</a>
    )
}

export default LinkComponent;