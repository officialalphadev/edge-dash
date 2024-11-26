import { Button } from "@/component/core/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/core/card";

export default function ButtonsPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Button Variants</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button text="Brand Fill" />
            <Button text="Brand Secondary" variant="brand-secondary" />
            <Button text="Brand Outline" variant="brand-outline" />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button text="Success Fill" variant="success-fill" />
            <Button text="Success Secondary" variant="success-secondary" />
            <Button text="Success Outline" variant="success-outline" />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button text="Warning Fill" variant="warning-fill" />
            <Button text="Warning Secondary" variant="warning-secondary" />
            <Button text="Warning Outline" variant="warning-outline" />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button text="Danger Fill" variant="danger-fill" />
            <Button text="Danger Secondary" variant="danger-secondary" />
            <Button text="Danger Outline" variant="danger-outline" />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button text="Info Fill" variant="info-fill" />
            <Button text="Info Secondary" variant="info-secondary" />
            <Button text="Info Outline" variant="info-outline" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Button Sizes</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-4">
          <Button text="Extra Small" size="xs" />
          <Button text="Small" size="sm" />
          <Button text="Medium" size="md" />
          <Button text="Large" size="lg" />
          <Button text="Extra Large" size="xl" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Button States</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-4">
          <Button text="Loading" isLoading />
          <Button text="Disabled" disabled />
        </CardContent>
      </Card>
    </div>
  );
}
