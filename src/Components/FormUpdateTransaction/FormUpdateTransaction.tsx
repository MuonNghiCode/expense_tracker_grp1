import React from "react";
import { Modal, Form, Input, Button, Select } from "antd";

interface FormUpdateTransactionProps {
  showFormUpdateTransaction: boolean;
  handleCloseFormUpdateTransaction: () => void;
  updateTransaction: (transaction: any) => void;
  initialTransaction: {
    id: string;
    name: string;
    amount: number;
    date: string;
    type: string;
    category: string;
  };
}

const FormUpdateTransaction: React.FC<FormUpdateTransactionProps> = ({
  showFormUpdateTransaction,
  handleCloseFormUpdateTransaction,
  updateTransaction,
  initialTransaction,
}) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    updateTransaction({ ...initialTransaction, ...values });
    handleCloseFormUpdateTransaction();
  };

  if (!showFormUpdateTransaction) return null;

  return (
    <Modal
      open={showFormUpdateTransaction}
      title="Update Transaction"
      onCancel={handleCloseFormUpdateTransaction}
      footer={[
        <Button key="back" onClick={handleCloseFormUpdateTransaction}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={() => form.submit()}>
          Submit
        </Button>,
      ]}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={initialTransaction}
        onFinish={handleSubmit}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input the title of the transaction!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="amount"
          label="Amount"
          rules={[
            {
              required: true,
              message: "Please input the amount of the transaction!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="date"
          label="Date"
          rules={[
            {
              required: true,
              message: "Please input the date of the transaction!",
            },
          ]}
        >
          <Input type="date" />
        </Form.Item>
        <Form.Item
          name="type"
          label="Type"
          rules={[
            {
              required: true,
              message: "Please select the type of the transaction!",
            },
          ]}
        >
          <Select>
            <Select.Option value="Income">Income</Select.Option>
            <Select.Option value="Expense">Expense</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[
            {
              required: true,
              message: "Please select the category of the transaction!",
            },
          ]}
        >
          <Select>
            <Select.Option value="Cash">Cash</Select.Option>
            <Select.Option value="Card">Card</Select.Option>
            <Select.Option value="Bank">Bank</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FormUpdateTransaction;
