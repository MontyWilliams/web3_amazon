import Sidebar from "../components/Sidebar"

const styles = {
  container: `h-full w-full flex b -[#fff]`
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />

    </div>

  )
}
