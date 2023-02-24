import { Button, Flex, Group, NumberInput } from "@mantine/core";
import type { UseFormReturnType } from "@mantine/form";
import type { CycleForm } from "../../pages/Home";

interface ButtonQuickReplyProps {
  number: number;
  onClick: (n: number) => void;
}
const ButtonQuickReply = ({ number, onClick }: ButtonQuickReplyProps) => {
  return (
    <Button color="pink" onClick={() => onClick(number)}>
      {number}
    </Button>
  );
};

const QUICK_LENGTH = [27, 28, 29, 30];

const CycleLength = ({
  form,
}: {
  form: UseFormReturnType<CycleForm, (values: CycleForm) => CycleForm>;
}) => {
  const quickSelect = (n: number) => {
    form.setFieldValue("cycleLength", n);
  };

  return (
    <label>
      <h4>Cycle length</h4>
      <p>Enter the number of days in your menstrual cycle.</p>
      <Flex direction="column" gap={24}>
        <NumberInput
          {...form.getInputProps("cycleLength")}
          name="cycleLength"
        />

        <Group>
          <span>Quick selections:</span>
          {QUICK_LENGTH.map((number) => (
            <ButtonQuickReply
              key={number}
              number={number}
              onClick={quickSelect}
            />
          ))}
        </Group>
      </Flex>
    </label>
  );
};

export default CycleLength;
