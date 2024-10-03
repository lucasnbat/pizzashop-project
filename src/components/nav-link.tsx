import { Link, LinkProps, useLocation } from "react-router-dom";

export type NavLinkProps = LinkProps;

export function NavLink(props: NavLinkProps) {
  /*
   * useLocation() retorna dados da rota atual
   * (pathname: endereço depois do dominio, como
   * "orders" em http://localhost:3333/orders)
   */
  const { pathname } = useLocation();

  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  );
}
