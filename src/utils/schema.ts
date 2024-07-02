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
    public remind?: {date: string, time: string},
    public schedule?: {date: string, time: string},
    public repeat?: {date: string, time: string},
    public upload: string[] = [],
    public remark: string = '',
    public created_at: string = new Date().toISOString(),
    public updated_at: string = new Date().toISOString(),
  ) {
    super(id, content, status, created_at, updated_at);
  }
}
