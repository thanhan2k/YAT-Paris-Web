import TrangChu from '~/pages/TrangChu';
import NuocHoa from '~/pages/NuocHoa';
import NhomHuong from '~/pages/NhomHuong';
import ThuongHieu from '~/pages/ThuongHieu';
import { HomeLayout } from '~/components/Layout';

const publicRoutes = [
    { path: '/', component: TrangChu, layout: HomeLayout },
    { path: '/nuoc-hoa', component: NuocHoa },
    { path: '/nhom-huong', component: NhomHuong },
    { path: '/thuong-hieu', component: ThuongHieu },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
