import { Button } from "@/component/core/button";
import { Card, CardContent } from "@/component/core/card";
import { Input } from "@/component/core/input";
import {
  Modal,
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
            <Button text="Modal 3" />
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
      </CardContent>
    </Card>
  );
}
