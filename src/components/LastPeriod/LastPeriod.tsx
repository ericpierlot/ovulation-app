import { Flex } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import type { UseFormReturnType } from "@mantine/form";
import type { CycleForm } from "../../pages/Home";

const LastPeriod = ({
  form,
}: {
  form: UseFormReturnType<CycleForm, (values: CycleForm) => CycleForm>;
}) => {
  return (
    <div>
      <h4>Last period</h4>
      <p>Choose the starting date of your most recent menstrual cycle.</p>
      <Flex justify={"center"}>
        <Calendar
          size="md"
          value={form.getInputProps("lastPeriod").value}
          onChange={(v) => form.setFieldValue("lastPeriod", v)}
        />
      </Flex>
    </div>
  );
};

export default LastPeriod;
