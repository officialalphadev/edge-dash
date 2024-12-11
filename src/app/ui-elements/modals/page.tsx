import { Button } from "@/component/core/button";
import { Card, CardContent } from "@/component/core/card";
import { Input } from "@/component/core/input";
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "@/component/core/modal";

export default function ModalsPage() {
  return (
    <Card>
      <CardContent className="flex items-center justify-center gap-4">
        <Modal>
          <ModalTrigger asChild>
            <Button text="Modal 1" />
          </ModalTrigger>
          <ModalContent className="sm:max-w-[425px]">
            <ModalHeader>
              <ModalTitle>Edit profile</ModalTitle>
              <ModalDescription>Make changes to your profile here. Click save when you&apos;re done.</ModalDescription>
            </ModalHeader>
            <form className="flex flex-col gap-4 py-4">
              <Input type="email" name="email" placeholder="Email" />
              <Input type="password" placeholder="Kata Sandi" />
            </form>
            <ModalFooter>
              <Button text="Save Changes" />
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal>
          <ModalTrigger asChild>
            <Button text="Modal 2" />
          </ModalTrigger>
          <ModalContent className="p-12 sm:max-w-[425px]">
            <h2 className="mb-2 text-center text-xl font-bold">Deactivate Your Account</h2>
            <p className="mb-6 text-center text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum been.
            </p>
            <div className="flex items-center justify-center gap-4">
              <ModalClose asChild>
                <Button text="Cancel" variant="danger-outline" className="w-full" />
              </ModalClose>
              <Button text="Deactivate" variant="danger-fill" className="w-full" />
            </div>
          </ModalContent>
        </Modal>
        <Modal>
          <ModalTrigger asChild>
            <Button text="Modal 3" />
          </ModalTrigger>
          <ModalContent className="flex flex-col items-center bg-indigo-500 p-12 dark:bg-indigo-500 sm:max-w-[425px]">
            <h2 className="mb-2 text-center text-xl font-bold">Congratulations!</h2>
            <p className="mb-6 text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum been.
            </p>
          </ModalContent>
        </Modal>
      </CardContent>
    </Card>
  );
}
