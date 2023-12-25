import Header from './Header'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="my-[56px]">{children}</main>
    </div>
  )
}

export default Layout
