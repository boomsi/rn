export class BaseTask {
  constructor(
    public id: string,
    public content: string,
    public status: 1 | 2 = 1,
    public created_at: string = new Date().toISOString(),
    public updated_at: string = new Date().toISOString(),
  ) {}
}

export class Task extends BaseTask {
  constructor(
    public id: string,
    public content: string,
    public status: 1 | 2 = 1,
    public child: BaseTask[] = [],
    public today: boolean = true,
    public remind: string = '',
    public schedule: string = '',
    public repeat: string = '',
    public upload: string[] = [],
    public remark: string = '',
    public created_at: string = new Date().toISOString(),
    public updated_at: string = new Date().toISOString(),
  ) {
    super(id, content, status, created_at, updated_at);
  }
}
