import React from "react";
import { Modal, Button, Form, Input, Select } from "antd";
import { useTransactionService } from "../../Services/TransactionService";
import { Transaction } from "../../Models/Transaction";
interface FormAddTransactionProps {
  showFormAddTransaction: boolean;
  handleCloseFormAddTransaction: () => void;
}

const FormAddTransaction: React.FC<FormAddTransactionProps> = ({
  showFormAddTransaction,
  handleCloseFormAddTransaction,
}) => {
  const [form] = Form.useForm();
  const { createTransaction } = useTransactionService();

  const onCreate = (values: Transaction) => {
    createTransaction(values);
    form.resetFields();
    handleCloseFormAddTransaction();
  };

  return (
    <Modal
      open={showFormAddTransaction}
      title="Add Transaction"
      onCancel={handleCloseFormAddTransaction}
      footer={[
        <Button key="back" onClick={handleCloseFormAddTransaction}>
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
        initialValues={{ modifier: "public" }}
        onFinish={onCreate}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input the name of the transaction!",
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

export default FormAddTransaction;
