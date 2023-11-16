import TrangChu from '~/pages/TrangChu';
import NuocHoa from '~/pages/NuocHoa';
import NhomHuong from '~/pages/NhomHuong';
import ThuongHieu from '~/pages/ThuongHieu';
import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
    { path: '/', component: TrangChu, layout: HeaderOnly },
    { path: '/nuochoa', component: NuocHoa },
    { path: '/nhomhuong', component: NhomHuong },
    { path: '/thuonghieu', component: ThuongHieu },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
