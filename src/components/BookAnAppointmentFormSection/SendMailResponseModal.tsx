import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

interface props {
  isError?: boolean;
  title?: string;
  body: string;
  isOpen: boolean;
  onClose: () => void;
}

function SendMailResponseModal({
  isError,
  title,
  body,
  isOpen,
  onClose,
}: props) {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      // backdrop="blur"
      placement="top-center"
      size="xl"
    >
      <ModalContent>
        {title && (
          <ModalHeader
            className={`${isError ? "text-danger" : "text-primary"} font-bold`}
          >
            <span>{title}</span>
          </ModalHeader>
        )}

        <ModalBody
          className={`${isError ? "text-danger-400" : "text-primary"} font-medium`}
        >
          <p>{body}</p>
        </ModalBody>

        <ModalFooter className="text-primary">
          <Button
            color={isError ? "danger" : "primary"}
            variant="flat"
            className="font-medium"
            onPress={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SendMailResponseModal;
