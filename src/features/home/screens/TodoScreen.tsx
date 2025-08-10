import { Button, Form, Input } from 'antd-mobile';

import { createYupValidator } from '@/helpers/yup.helpers';
import { formSchema } from '@/features/home/helpers/home.helpers';
import type { HomeType } from '@/features/home/types/home.types';

const TodoScreen = () => {
  const [form] = Form.useForm<HomeType>();
  const validator = createYupValidator(formSchema);

  const handleSubmitForm = (values: HomeType) => {
    // TODO: disable console.log, remove later
    // eslint-disable-next-line no-console
    console.log(values);
  };
  return (
    <main>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmitForm}
        footer={
          <Button block type="submit" color="primary" size="large">
            Gửi
          </Button>
        }
      >
        <Form.Item name="name" label="Họ tên" rules={[validator('name')]}>
          <Input placeholder="Nhập họ tên" />
        </Form.Item>

        <Form.Item name="email" label="Email" rules={[validator('email')]}>
          <Input placeholder="Nhập email" />
        </Form.Item>
      </Form>
    </main>
  );
};

export default TodoScreen;
