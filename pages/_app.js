import '../styles/globals.css'
import Layout from '../layouts'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }) {

  if (Component.getLayout) {
    return (

      <getLayout>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          className='mt-12'
        />
        <Component {...pageProps} />
      </getLayout>


    )
  }
  return (

    <Layout>
      <SkeletonTheme baseColor="#94a3b8" highlightColor="#64748b">
        <Component {...pageProps} />
      </SkeletonTheme>
    </Layout>
  )
}
